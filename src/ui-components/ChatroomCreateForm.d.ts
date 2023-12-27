/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatroomCreateFormInputValues = {
    title?: string;
};
export declare type ChatroomCreateFormValidationValues = {
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatroomCreateFormOverridesProps = {
    ChatroomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChatroomCreateFormProps = React.PropsWithChildren<{
    overrides?: ChatroomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChatroomCreateFormInputValues) => ChatroomCreateFormInputValues;
    onSuccess?: (fields: ChatroomCreateFormInputValues) => void;
    onError?: (fields: ChatroomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatroomCreateFormInputValues) => ChatroomCreateFormInputValues;
    onValidate?: ChatroomCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChatroomCreateForm(props: ChatroomCreateFormProps): React.ReactElement;
