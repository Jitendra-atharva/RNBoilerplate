import { Alert, Dimensions, Platform, PixelRatio } from 'react-native';
//@ts-ignore
import _ from 'lodash';

import { StorageProvider } from '../framework';


/**
 * CHECKS IF THE PASSED VALUE IS EMPTY STRING OR NOT
 * RETURN `true` IF STRING IS EMPTY ELSE RETURN `false`
 */
export function isEmpty(val: any): boolean {
  let isValEmpty = true;
  if (!_.isNil(val) && _.trim(String(val)).length > 0) {
    isValEmpty = false;
  }
  return isValEmpty;
}

/**
 * CHECKS IF THE PASSED VALUE IS VALID EMAIL
 * RETURN `true` IF VALID ELSE RETURN `false`
 */
export function isEmail(fieldName: string, val: string) {
  //const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailReg = new RegExp("[^@]+[@][\\S]+[.][\\S]+");

  if (isEmpty(val)) {
    return { status: false, message: `Email address field cannot be empty.` };
  } else if (!emailReg.test(val)) {
    return { status: false, message: `Invalid email address.` };
  }
  return { status: true, message: "" };
}

/* To handle phone validation */
export function phoneValidate(fieldName: string, value: any) {
  console.log('phoneValidate');
  //const phoneRegex = /^962[0-9]{8,9}$/;
  //const phoneRegex = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
  const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  if (value === "" || value === undefined || value === null) {
    return { status: false, message: `The ${fieldName} field cannot be left blank.` };
  } else if (!phoneRegex.test(value)) {
    return {
      status: false,
      message: `Please enter valid ${fieldName}`
    };
  }
  return { status: true, message: "" };
}

export function confirmPasswordValidate(
  fieldName: string,
  confirmPassword: string,
  fieldName2: string = 'password',
  password: string = ''
) {
  if (confirmPassword === "" || confirmPassword === undefined || confirmPassword === null) {
    return { status: false, message: `The ${fieldName} field cannot be left blank.` };
  } else if (password && password !== confirmPassword) {
    return {
      status: false,
      message: `The ${fieldName} should be same as ${fieldName2}`
    };
  }

  return { status: true, message: "" };
}

export function passwordValidate(fieldName: string, password: string = '') {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password === "" || password === undefined || password === null) {
    return { status: false, message: `The ${fieldName} field cannot be left blank.` };
  } else if (!passwordRegex.test(password)) {
    return {
      status: false,
      message: `The ${fieldName} should contain atleast 8 letters, one uppercase and one special character.`
    };
  }

  return { status: true, message: "" };
}

/* To handle required validation */
export function requireValidate(fieldName: string, value: any, isBool: boolean = false) {
  if (isBool) {
    if (value) {
      return { status: true, message: "" };
    }
    return { status: false, message: "" };
  }
  if (value === "" || value === undefined || value === null) {
    if (fieldName === "lmsUrl") {
      return { status: false, message: `Please select ${fieldName}` };
    }
    else {
      return { status: false, message: `The ${fieldName} field cannot be left blank.` };
    }
  }
  return { status: true, message: "" };
}

