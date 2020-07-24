import React from 'react';
import {useI18n} from 'locale';
import {Box, Text} from 'components';

import {ItemView} from './ItemView';

export const WhatItsNot = () => {
  const i18n = useI18n();
  return (
    <ItemView
      item="step-3"
      image={require('assets/onboarding-neighbourhood.png')}
      altText={i18n.translate('Onboarding.WhatItsNot.ImageAltText')}
      header={i18n.translate('Onboarding.WhatItsNot.Title')}
    >
      <>
        <Box marginBottom="m">
          <Text variant="bodyText" color="overlayBodyText">
            {i18n.translate('Onboarding.WhatItsNot.Body1')}
          </Text>
        </Box>
        <Box marginBottom="m">
          <Text variant="bodyText" color="overlayBodyText">
            {i18n.translate('Onboarding.WhatItsNot.Body2')}
          </Text>
        </Box>
      </>
    </ItemView>
  );
};
