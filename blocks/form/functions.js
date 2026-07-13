/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Custom submit function
 * @param {scope} globals
 */
function submitFormArrayToString(globals) {
  const data = globals.functions.exportData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(',');
    }
  });
  globals.functions.submitForm(data, true, 'application/json');
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
* Masks the first 5 digits of the mobile number with *
* @param {*} mobileNumber
* @returns {string} returns the mobile number with first 5 digits masked
*/
function maskMobileNumber(mobileNumber) {
  if (!mobileNumber) {
    return '';
  }
  const value = mobileNumber.toString();
  // Mask first 5 digits and keep the rest
  return ` ${'*'.repeat(5)}${value.substring(5)}`;
}

/**
 * Calculate EMI Test
 * @name calculateEmiTest
 * @param {string} principal in Stringformat
 * @param {string} annualRate in Stringformat
 * @param {string} tenureMonths in Stringformat
 * @return {string}
 */
function calculateEmiTest(principal, annualRate, tenureMonths) {
  return "hello EMI Test";
}

/**
 * Calculate EMI
 * @name calculateEMI Calculates Equated Monthly Installment
 * @param {number} principal in Numberformat
 * @param {number} annualRate in Numberformat
 * @param {number} tenureMonths in Numberformat
 * @return {number}
 */
function calculateEMI(principal, annualRate, tenureMonths) {
  if (!principal || !annualRate || !tenureMonths) {
    return 0;
  }
  const P = parseFloat(principal);
  const r = parseFloat(annualRate) / 12 / 100;
  const n = parseFloat(tenureMonths);
  if (P <= 0 || r <= 0 || n <= 0) {
    return 0;
  }
  const onePlusRPowN = (1 + r) ** n;
  const emi = (P * r * onePlusRPowN) / (onePlusRPowN - 1);
  return Math.round(emi * 100) / 100;
}

// eslint-disable-next-line import/prefer-default-export
export {
  getFullName, days, submitFormArrayToString, maskMobileNumber, calculateEMI,
};
