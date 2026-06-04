import { locales, translate, type LocaleCode } from '~/utils/i18n'

const COOKIE_NAME = 'autobot_locale'

export function useLocale() {
  const cookie = useCookie<LocaleCode>(COOKIE_NAME, { sameSite: 'lax' })
  const locale = useState<LocaleCode>('autobot-locale', () => cookie.value || 'id')

  function setLocale(next: LocaleCode) {
    locale.value = next
    cookie.value = next
  }

  function toggleLocale() {
    setLocale(locale.value === 'id' ? 'en' : 'id')
  }

  function t(key: string) {
    return translate(locale.value, key)
  }

  return {
    locale,
    locales,
    setLocale,
    toggleLocale,
    t,
  }
}
