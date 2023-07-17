/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SendGridEmail } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SendGridEmailUpdateFormInputValues = {
    name?: string;
    email?: string;
    shootingLocation?: string;
    heardOfUs?: string;
};
export declare type SendGridEmailUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    shootingLocation?: ValidationFunction<string>;
    heardOfUs?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SendGridEmailUpdateFormOverridesProps = {
    SendGridEmailUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    shootingLocation?: PrimitiveOverrideProps<TextFieldProps>;
    heardOfUs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SendGridEmailUpdateFormProps = React.PropsWithChildren<{
    overrides?: SendGridEmailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sendGridEmail?: SendGridEmail;
    onSubmit?: (fields: SendGridEmailUpdateFormInputValues) => SendGridEmailUpdateFormInputValues;
    onSuccess?: (fields: SendGridEmailUpdateFormInputValues) => void;
    onError?: (fields: SendGridEmailUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SendGridEmailUpdateFormInputValues) => SendGridEmailUpdateFormInputValues;
    onValidate?: SendGridEmailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SendGridEmailUpdateForm(props: SendGridEmailUpdateFormProps): React.ReactElement;
