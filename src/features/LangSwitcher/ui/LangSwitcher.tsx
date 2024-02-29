import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <Button variant={ThemeButton.CLEAR} onClick={toggle}>{t('Перевод')}</Button>
        </div>
    );
};

export default LangSwitcher;
