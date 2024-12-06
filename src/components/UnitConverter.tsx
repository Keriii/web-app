import React, { useState } from 'react';
import { UnitType, UnitOption } from '../types';
import { lengthUnits, weightUnits, temperatureUnits, lengthConversions, weightConversions } from '../constants';

const UnitConverter: React.FC = () => {
    const [unitType, setUnitType] = useState<UnitType>('length');
    const [inputValue, setInputValue] = useState<string>('');
    const [fromUnit, setFromUnit] = useState<string>('');
    const [toUnit, setToUnit] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const getUnits = (type: UnitType): UnitOption[] => {
        switch (type) {
            case 'length':
                return lengthUnits;
            case 'weight':
                return weightUnits;
            case 'temperature':
                return temperatureUnits;
        }
    };

    const convert = (e: React.FormEvent) => {
        e.preventDefault();
        const value = parseFloat(inputValue);

        if (isNaN(value)) {
            setResult('Please enter a valid number');
            return;
        }

        let convertedValue: number;

        if (unitType === 'temperature') {
            // Convert to Celsius first
            let celsius: number;
            if (fromUnit === 'C') celsius = value;
            else if (fromUnit === 'F') celsius = (value - 32) * 5/9;
            else celsius = value - 273.15;

            // Convert from Celsius to target unit
            if (toUnit === 'C') convertedValue = celsius;
            else if (toUnit === 'F') convertedValue = celsius * 9/5 + 32;
            else convertedValue = celsius + 273.15;
        } else {
            const conversions = unitType === 'length' ? lengthConversions : weightConversions;
            const standardUnit = value * conversions[fromUnit];
            convertedValue = standardUnit / conversions[toUnit];
        }

        setResult(`${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                    <h1 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Unit Converter
                    </h1>

                    <div className="flex justify-center space-x-4 mb-8">
                        {['length', 'weight', 'temperature'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setUnitType(type as UnitType)}
                                className={`px-4 py-2 rounded-md ${
                                    unitType === type
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={convert} className="space-y-6">
                        <div>
                            <input
                                type="number"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Enter value"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <select
                                value={fromUnit}
                                onChange={(e) => setFromUnit(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            >
                                <option value="">From</option>
                                {getUnits(unitType).map((unit) => (
                                    <option key={unit.value} value={unit.value}>
                                        {unit.label}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            >
                                <option value="">To</option>
                                {getUnits(unitType).map((unit) => (
                                    <option key={unit.value} value={unit.value}>
                                        {unit.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Convert
                        </button>
                    </form>

                    {result && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-md">
                            <p className="text-center text-lg font-medium text-gray-900">
                                {result}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UnitConverter; 