import { DEFAULT_LOCALE, isLocaleCode, locales, translate, type LocaleCode } from '~/utils/i18n'

const COOKIE_NAME = 'autobot_locale'

export function useLocale() {
  const cookie = useCookie<LocaleCode>(COOKIE_NAME, { sameSite: 'lax' })
  const locale = useState<LocaleCode>('autobot-locale', () => isLocaleCode(cookie.value) ? cookie.value : DEFAULT_LOCALE)

  function setLocale(next: LocaleCode) {
    if (!isLocaleCode(next)) return
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
