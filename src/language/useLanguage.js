import * as Strings from './strings';

// here it is possible to add some logic, like override strings, another language file, etc
const useLanguage = () => ({ ...Strings });

export default useLanguage;
