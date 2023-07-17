/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SendGridEmailCreateFormInputValues = {
    name?: string;
    email?: string;
    shootingLocation?: string;
    heardOfUs?: string;
};
export declare type SendGridEmailCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    shootingLocation?: ValidationFunction<string>;
    heardOfUs?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SendGridEmailCreateFormOverridesProps = {
    SendGridEmailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    shootingLocation?: PrimitiveOverrideProps<TextFieldProps>;
    heardOfUs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SendGridEmailCreateFormProps = React.PropsWithChildren<{
    overrides?: SendGridEmailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SendGridEmailCreateFormInputValues) => SendGridEmailCreateFormInputValues;
    onSuccess?: (fields: SendGridEmailCreateFormInputValues) => void;
    onError?: (fields: SendGridEmailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SendGridEmailCreateFormInputValues) => SendGridEmailCreateFormInputValues;
    onValidate?: SendGridEmailCreateFormValidationValues;
} & React.CSSProperties>;
export default function SendGridEmailCreateForm(props: SendGridEmailCreateFormProps): React.ReactElement;
