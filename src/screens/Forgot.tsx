import React, { useState } from 'react'
import { View, Modal, StyleSheet, Pressable } from 'react-native'
import styled from 'styled-components/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { COLORS } from '../styles/theme'
import CloseIcon from '../assets/icons/Close'
import CustomButton from '../components/Button'
import { userStore } from '../store/userStore'
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase'

interface ForgotModalProps {
  isVisible?: boolean
  onClose?: () => void
  onLoginClick?: () => void
}

const ValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Please enter your email address'),
})

const ForgotModal: React.FC<ForgotModalProps> = ({ isVisible, onClose, onLoginClick }) => {
  const handleSubmit = (value: { email: string }) => {
    sendPasswordResetEmail(auth, value.email)
  }
  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
      <SignUpWrapper>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, errors, touched, handleChange, isValid, handleSubmit, handleBlur }) => (
            <SignUpContainer>
              <SignUpHead>
                <SignUpHeading>Forgot</SignUpHeading>
                <Pressable onPress={onClose}>
                  <CloseIcon width={24} height={24} />
                </Pressable>
              </SignUpHead>

              <View>
                <LabelText>E-mail</LabelText>
                <InputBorder>
                  <InputStyle
                    placeholder='Enter your e-mail'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholderTextColor={COLORS.SecondaryTwo}
                  />
                </InputBorder>
                {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
              </View>

              <CustomButton
                variant='primary'
                text='Reset Email'
                onPress={() => handleSubmit()}
                disabled={!isValid}
                buttonStyle={[styles.submitBtn]}
              />

              <AccountView>
                <AccountViewText>Looking for login?</AccountViewText>
                <Pressable onPress={onLoginClick}>
                  <LoginLink>Log in</LoginLink>
                </Pressable>
              </AccountView>
            </SignUpContainer>
          )}
        </Formik>
      </SignUpWrapper>
    </Modal>
  )
}

const SignUpWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.backgroundBlurClr};
`

const SignUpContainer = styled.View`
  background-color: ${COLORS.iconsNormalClr};
  padding: 20px;
  border-radius: 10px;
  width: 328px;
`

const SignUpHead = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SignUpHeading = styled.Text`
  font-size: 20px;
  letter-spacing: -0.4px;
  font-family: Arvo-Regular;
  color: ${COLORS.iconsHighlightClr};
`

const LabelText = styled.Text`
  font-size: 14px;
  letter-spacing: -0.28px;
  color: ${COLORS.textClr};
  font-family: Gilroy-Medium;
  margin-top: 16px;
  margin-bottom: 8px;
`

const AccountViewText = styled.Text`
  color: ${COLORS.SecondaryTwo};
  font-family: Gilroy-Regular;
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
`

const VerifyText = styled.Text`
  font-size: 12px;
  color: ${COLORS.textSecondaryClr};
  font-family: Gilroy-Regular;
`

const InputStyle = styled.TextInput`
  font-family: Gilroy-Medium;
  width: 100%;
  font-size: 12px;
`

const ErrorText = styled.Text`
  font-size: 12px;
  color: ${COLORS.errorClr};
`

const AccountView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`

const LoginLink = styled.Text`
  color: ${COLORS.textSecondaryClr};
  font-size: 14px;
  font-family: Gilroy-Medium;
`

export default ForgotModal

const styles = StyleSheet.create({
  submitBtn: {
    marginVertical: 16,
  },
})
