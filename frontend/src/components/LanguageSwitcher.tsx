"use client";
import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const handleChange = (_: any, lng: string) => {
    if (lng) i18n.changeLanguage(lng);
  };
  return (
    <ToggleButtonGroup
      value={i18n.language.startsWith('kz') ? 'kz' : 'ru'}
      exclusive
      onChange={handleChange}
      size="small"
      color="primary"
      aria-label="language switcher"
    >
      <ToggleButton value="ru">Рус</ToggleButton>
      <ToggleButton value="kz">Қаз</ToggleButton>
    </ToggleButtonGroup>
  );
} 