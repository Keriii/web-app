import { UnitOption, ConversionFactors } from './types';

export const lengthUnits: UnitOption[] = [
    { value: 'mm', label: 'Millimeter (mm)' },
    { value: 'cm', label: 'Centimeter (cm)' },
    { value: 'm', label: 'Meter (m)' },
    { value: 'km', label: 'Kilometer (km)' },
    { value: 'in', label: 'Inch (in)' },
    { value: 'ft', label: 'Foot (ft)' },
    { value: 'yd', label: 'Yard (yd)' },
    { value: 'mi', label: 'Mile (mi)' },
];

export const weightUnits: UnitOption[] = [
    { value: 'mg', label: 'Milligram (mg)' },
    { value: 'g', label: 'Gram (g)' },
    { value: 'kg', label: 'Kilogram (kg)' },
    { value: 'oz', label: 'Ounce (oz)' },
    { value: 'lb', label: 'Pound (lb)' },
];

export const temperatureUnits: UnitOption[] = [
    { value: 'C', label: 'Celsius (°C)' },
    { value: 'F', label: 'Fahrenheit (°F)' },
    { value: 'K', label: 'Kelvin (K)' },
];

export const lengthConversions: ConversionFactors = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.344,
};

export const weightConversions: ConversionFactors = {
    mg: 0.000001,
    g: 0.001,
    kg: 1,
    oz: 0.0283495,
    lb: 0.453592,
}; 