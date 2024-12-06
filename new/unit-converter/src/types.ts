export type UnitType = 'length' | 'weight' | 'temperature';

export interface UnitOption {
    value: string;
    label: string;
}

export interface ConversionFactors {
    [key: string]: number;
} 