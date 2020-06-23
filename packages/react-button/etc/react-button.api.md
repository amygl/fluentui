## API Report File for "@fluentui/react-button"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ColorPlateSet } from '@fluentui/react-theme-provider';
import { ComposeOptions } from '@fluentui/react-compose';
import { ComposePreparedOptions } from '@fluentui/react-compose';
import * as React from 'react';

// @public (undocumented)
export const Button: import("@fluentui/react-compose").ComponentWithAs<"button", ButtonProps>;

// @public (undocumented)
export const ButtonBase: import("@fluentui/react-compose").ComponentWithAs<"button", ButtonProps>;

// Warning: (ae-forgotten-export) The symbol "ComposeStandardStatics" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface ButtonOptions extends ComposeOptions<ButtonProps, ButtonSlots, ButtonSlotProps, ComposeStandardStatics> {
}

// Warning: (ae-forgotten-export) The symbol "ComponentProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface ButtonProps extends ComponentProps, React.HTMLAttributes<HTMLButtonElement> {
    circular?: boolean;
    content?: ShorthandValue<{}>;
    disabled?: boolean;
    fluid?: boolean;
    // Warning: (ae-forgotten-export) The symbol "ShorthandValue" needs to be exported by the entry point index.d.ts
    icon?: ShorthandValue<{}>;
    iconOnly?: boolean;
    iconPosition?: 'before' | 'after';
    inverted?: boolean;
    loader?: ShorthandValue<{}>;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    size?: SizeValue;
    // Warning: (ae-forgotten-export) The symbol "RecursivePartial" needs to be exported by the entry point index.d.ts
    tokens?: RecursivePartial<ButtonTokens>;
}

// @public (undocumented)
export type ButtonSlotProps = {
    [key in keyof ButtonSlots]: ButtonProps[key];
};

// @public (undocumented)
export interface ButtonSlots {
    // (undocumented)
    content: React.ElementType;
    // (undocumented)
    icon: React.ElementType;
    // (undocumented)
    loader: React.ElementType;
}

// @public (undocumented)
export interface ButtonState extends ButtonProps {
}

// @public (undocumented)
export type ButtonTokens = ColorPlateSet & {
    padding: string;
    margin: string;
    height: string;
    minWidth: string;
    maxWidth: string;
    contentGap: string;
    iconSize: string;
    borderRadius: string;
    borderWidth: string;
    size: {
        smallest: string;
        smaller: string;
        small: string;
        regular: string;
        large: string;
        larger: string;
        largest: string;
    };
    transform: string;
    transition: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    pressed: {
        transform: string;
    };
};

// @public (undocumented)
export type SizeValue = 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest';

// @public (undocumented)
export const ToggleButton: import("@fluentui/react-compose").ComponentWithAs<"button", ToggleButtonProps>;

// @public (undocumented)
export const ToggleButtonBase: import("@fluentui/react-compose").ComponentWithAs<"button", ToggleButtonProps & ButtonProps>;

// @public (undocumented)
export interface ToggleButtonOptions extends ComposeOptions<ToggleButtonProps, ToggleButtonSlots, ToggleButtonSlotProps, ComposeStandardStatics> {
}

// @public (undocumented)
export interface ToggleButtonProps extends ButtonProps {
    checked?: boolean;
    defaultChecked?: boolean;
}

// @public (undocumented)
export type ToggleButtonSlotProps = {
    [key in keyof ToggleButtonSlots]: ToggleButtonProps[key];
};

// @public (undocumented)
export interface ToggleButtonSlots extends ButtonSlots {
}

// @public (undocumented)
export interface ToggleButtonState extends ToggleButtonProps {
}

// @public
export const useButton: (props: ButtonProps, ref: import("react").Ref<HTMLElement>, options: ComposePreparedOptions<{}, any, {}>) => ButtonState;

// Warning: (ae-forgotten-export) The symbol "ToggleProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ToggleState" needs to be exported by the entry point index.d.ts
//
// @public
export const useToggle: <TProps, TState extends TProps = TProps>(props: TProps & ToggleProps) => TState & ToggleState;


// (No @packageDocumentation comment for this package)

```