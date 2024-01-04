import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LibyanValidatorsService {

  constructor() { }


  PhoneNumberValidations(control: AbstractControl): { [key: string]: any } | null {

    const phoneNumber: string = control.value == null ? '' : control.value.toString();

    if (phoneNumber == "")
      return null;

    var number = phoneNumber[0] + "" + phoneNumber[1] + phoneNumber[2];

    if (number != '091' && number != '092' && number != '094' && number != '095') {

      return {

        phoneError: 'يجب ان تكون بداية الرقم 091 او 092 او 094 او 095'
      }

    } else if (phoneNumber.length != 10) {

      return {

        phoneError: 'عدد خانات رقم الهاتف غير صحيحة'
      }
    }
    return null
  }

  LibyanaPhoneNumberValidations(control: AbstractControl): { [key: string]: any } | null {

    const phoneNumber: string = control.value == null ? '' : control.value.toString();

    if (phoneNumber == "")
      return null;

    var number = phoneNumber[0] + "" + phoneNumber[1] + phoneNumber[2];

    if (number != '092' && number != '094' && number != '095') {

      return {

        phoneError: 'يجب ان تكون بداية الرقم او 092 او 094 او 095'
      }

    } else if (phoneNumber.length != 10) {

      return {

        phoneError: 'عدد خانات رقم الهاتف غير صحيحة'
      }
    }
    return null
  }

  AlmadarPhoneNumberValidations(control: AbstractControl): { [key: string]: any } | null {

    const phoneNumber: string = control.value == null ? '' : control.value.toString();

    if (phoneNumber == "")
      return null;

    var number = phoneNumber[0] + "" + phoneNumber[1] + phoneNumber[2];

    if (number != '091' && number != '093') {

      return {

        phoneError: 'يجب ان تكون بداية الرقم او 091 او 093  '
      }

    } else if (phoneNumber.length != 10) {

      return {

        phoneError: 'عدد خانات رقم الهاتف غير صحيحة'
      }
    }
    return null
  }


  NationalNumberValidator(control: AbstractControl): { [key: string]: any } | null {

    const BirdDate = new Date(control.root.value.birthDate).getFullYear();
    const Gender = control.root.value.gender


    const NationalNumber: string = control.value == null ? '' : control.value.toString();

    const DateInNationalNumber = NationalNumber.substring(1, 5);
    const Lastdigits = NationalNumber.substring(5);

    var Message = "";

    if ((NationalNumber[0] == '1' && Gender != 'ذكر') || (NationalNumber[0] == '2' && Gender != 'انثى')) {

      Message = "يجب ان يكون الجنس و الخانة الاولى من الرقم الوطني متطابقان"

    } else if (DateInNationalNumber != BirdDate.toString()) {

      Message = "يجب ان يكون تاريخ الميلاد مطابق للرقم الوطني"

    } else if (NationalNumber.length != 12) {

      Message = "يجب ان يكون عدد خانات الرقم الوطني 12 خانة"

    } else if (Lastdigits == "0000000") {
      Message = "لايسمح بأن يكون الرقم الوطني اصفار فقط"
    }
    return Message == "" ? null : {
      NationalNumberError: Message
    }
  }

  NationalNumberWithoutBardDayValidator(control: AbstractControl): { [key: string]: any } | null {

    const Gender = control.root.value.gender

    const NationalNumber: string = control.value == null ? '' : control.value.toString();

    const Lastdigits = NationalNumber.substring(5);

    var Message = "";

    if ((NationalNumber.startsWith('1') && Gender != '1') || (NationalNumber.startsWith('2') && Gender != '2')) {

      Message = "يجب ان يكون الجنس و الخانة الاولى من الرقم الوطني متطابقان"

    } else if (NationalNumber.length != 12) {

      Message = "يجب ان يكون عدد خانات الرقم الوطني 12 خانة"

    } else if (Lastdigits == "0000000") {

      Message = "لايسمح بأن يكون الرقم الوطني اصفار فقط"
    }

    return Message == "" ? null : {
      NationalNumberError: Message
    }
  }



  BirthDateValidator(control: AbstractControl): { [key: string]: any } | null {

    const BirdDate = new Date(control.root.value.birthDate).getFullYear();

    const NationalNumber: string = control.root.getRawValue().nationalNumber == null ? '' : control.root.getRawValue().nationalNumber.toString();

    const DateInNationalNumber = NationalNumber.substring(1, 5);

    var Message = "";

    if (DateInNationalNumber != BirdDate.toString()) {

      Message = "يجب ان يكون تاريخ الميلاد مطابق للرقم الوطني"

    }

    return Message == "" ? null : {
      BirthDateError: Message
    }
  }
}
