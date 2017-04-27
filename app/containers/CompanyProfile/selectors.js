import { createSelector } from 'reselect';

/**
 * Direct selector to the companyProfile state domain
 */
const selectCompanyProfileDomain = () => (state) => state.get('companyProfile');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CompanyProfile
 */

const makeSelectCompanyProfile = () => createSelector(
  selectCompanyProfileDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompanyProfile;
export {
  selectCompanyProfileDomain,
};
