import { useState, useCallback } from 'react';

export interface CustomField {
  id: string;
  label: string;
  value: string;
}

export function useCustomFields() {
  const [fields, setFields] = useState<CustomField[]>([]);

  const addField = useCallback(() => {
    setFields(prev => [
      ...prev,
      { id: `custom_${Date.now()}`, label: '', value: '' },
    ]);
  }, []);

  const updateField = useCallback((id: string, key: 'label' | 'value', val: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, [key]: val } : f));
  }, []);

  const deleteField = useCallback((id: string) => {
    setFields(prev => prev.filter(f => f.id !== id));
  }, []);

  const clearFields = useCallback(() => setFields([]), []);

  return { fields, addField, updateField, deleteField, clearFields };
}
