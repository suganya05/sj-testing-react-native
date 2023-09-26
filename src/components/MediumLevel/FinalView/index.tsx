import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../styles/theme'
import CustomButton from '../../Button'
import styled from 'styled-components/native'
import PlusIcon from '../../../assets/icons/MidlevelIcon/PlusIcon'
import MinusIcon from '../../../assets/icons/MidlevelIcon/MinusIcon'
import { Checkbox } from 'react-native-paper'

interface IFinalView {
  Data: {
    title: string
    content: string
  }[]
  navigation: any
  quantity: string
  approved: boolean
  setQuantity: React.Dispatch<React.SetStateAction<string>>
  setApproved: React.Dispatch<React.SetStateAction<boolean>>
}

const FinalView: React.FC<IFinalView> = ({
  Data,
  navigation,
  setQuantity,
  quantity,
  setApproved,
  approved,
}) => {
  const number = Number(quantity)
  const handleIncrease = () => {
    if (number < 10) {
      setQuantity((number + 1).toString())
    }
  }
  const handleDecrease = () => {
    if (number !== 0) {
      setQuantity((number - 1).toString())
    }
  }
  return (
    <View style={styles.finalViewContainer}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Checkbox
          status={approved ? 'checked' : 'unchecked'}
          onPress={() => setApproved((m) => !m)}
        />
        <Text
          style={{
            color: COLORS.textSecondaryClr,
            fontFamily: 'Gilroy-Medium',
            fontSize: 14,
            paddingVertical: 8,
          }}
        >
          I’ve reviewed and approved my design.
        </Text>
      </View>
      <Text
        style={{
          color: COLORS.textClr,
          fontFamily: 'Gilroy-Medium',
          fontSize: 14,
          paddingVertical: 8,
        }}
      >
        Quantity
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <InputBorder>
          <InputStyle
            placeholder='Quantity'
            placeholderTextColor={COLORS.SecondaryTwo}
            keyboardType='numeric'
            value={quantity}
            onChangeText={(e) => setQuantity(e)}
          />
        </InputBorder>
        <AddSubButton onPress={handleIncrease}>
          <PlusIcon width={24} height={24} />
        </AddSubButton>
        <AddSubButton onPress={handleDecrease}>
          <MinusIcon width={24} height={24} />
        </AddSubButton>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 37,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 95,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              color: COLORS.textClr,
              fontFamily: 'Montserrat-Regular',
              fontSize: 10,
            }}
          >
            Style
          </Text>
          <Text style={{ color: COLORS.textClr, fontFamily: 'Arvo-Regular', fontSize: 14 }}>
            Round Neck
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 95,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              color: COLORS.textClr,
              fontFamily: 'Montserrat-Regular',
              fontSize: 10,
            }}
          >
            Size
          </Text>
          <Text style={{ color: COLORS.textClr, fontFamily: 'Arvo-Regular', fontSize: 14 }}>
            XXL
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 95,
            paddingTop: 16,
          }}
        >
          <Text
            style={{
              color: COLORS.textClr,
              fontFamily: 'Montserrat-Regular',
              fontSize: 10,
            }}
          >
            Quantity
          </Text>
          <Text style={{ color: COLORS.textClr, fontFamily: 'Arvo-Regular', fontSize: 14 }}>
            X1
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          paddingBottom: 8,
          columnGap: 37,
        }}
      >
        {Data.map((item, index) => (
          <View
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 95,
              paddingTop: 16,
            }}
          >
            <Text
              style={{
                color: COLORS.textClr,
                fontFamily: 'Montserrat-Regular',
                fontSize: 10,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: COLORS.textClr, fontFamily: 'Arvo-Regular', fontSize: 14 }}>
              {item.content}
            </Text>
          </View>
        ))}
      </View>
      <CustomButton
        variant='primary'
        text='Buy now'
        onPress={() => navigation.navigate('Checkout')}
        buttonStyle={[styles.submitBtn]}
      />
    </View>
  )
}

export default FinalView

const styles = StyleSheet.create({
  finalViewContainer: {
    flex: 1,
    padding: 16,
    marginTop: -80,
  },
  submitBtn: {
    marginVertical: 8,
    fontFamily: 'Arvo-Regular',
    marginBottom: 100,
  },
})

const AddSubButton = styled.Pressable`
  border-radius: 5px;
  background: ${COLORS.addSubButtonBackgroundColor};
  padding: 11px;
`

const InputBorder = styled.View`
  border-color: ${COLORS.strokeClr};
  border-width: 1px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  width: 70%;
`

const InputStyle = styled.TextInput`
  font-family: Gilroy-Medium;
  width: 100%;
  font-size: 12px;
`
