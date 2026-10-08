const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://easybiodatamaker.com/#software',
  name: 'EasyBiodataMaker',
  alternateName: 'Free Marriage Biodata Maker',
  applicationCategory: 'LifestyleApplication',
  applicationSubCategory: 'Matrimonial Tools',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    description: 'Free online use',
  },
  description: 'Free online marriage biodata maker with templates, Indian-language labels, photo upload, custom fields and A4 export.',
  url: 'https://easybiodatamaker.com',
  featureList: [
    'Marriage biodata templates',
    'Indian language form labels',
    'Photo upload',
    'Custom fields',
    'A4 PDF export',
    'No registration required',
  ],
};

export function SoftwareApplicationSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />;
}
