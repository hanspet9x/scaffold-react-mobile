import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IDialogProps} from '../containers/dialog/dialog.types';


export type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
    Register: undefined;
    Register2: undefined;
    PasswordConfirmation: undefined;
    TransactionPin: undefined;
    Dialog: IDialogProps;
    Advert: undefined;
};

export type RootScreenStackProps<T extends keyof RootStackParamList> =
NativeStackScreenProps<RootStackParamList, T>;
