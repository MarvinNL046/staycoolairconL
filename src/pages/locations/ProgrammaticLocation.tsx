import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';
import { buildProgrammaticLandingProps, getProgrammaticLocationBySlug } from '../../data/programmaticLocations';

export default function ProgrammaticLocationPage() {
  const { citySlug } = useParams<{ citySlug: string }>();

  if (!citySlug) {
    return <Navigate to="/werkgebied" replace />;
  }

  const profile = getProgrammaticLocationBySlug(citySlug);

  if (!profile) {
    return <Navigate to="/werkgebied" replace />;
  }

  const localizedReviews = getLocalizedReviews(profile.city, 4);
  const landingProps = buildProgrammaticLandingProps(profile);

  return <LocationLandingPage {...landingProps} testimonials={localizedReviews} />;
}
