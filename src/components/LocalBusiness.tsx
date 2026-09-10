import SchemaMarkup from './SchemaMarkup';
interface LocalBusinessProps { city: string; region?: string; postalCode?: string; }
export default function LocalBusiness({city,region='Limburg'}:LocalBusinessProps){
 return <SchemaMarkup type="LocalBusiness" data={{name:'StayCool Airco',url:'https://staycoolairco.nl',telephone:'+31462021430',areaServed:[{'@type':'City',name:city},{'@type':'AdministrativeArea',name:region}]}} />;
}
