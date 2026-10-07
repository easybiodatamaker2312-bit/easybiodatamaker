# Religion & Community Field System

## Builder behavior

- Standard biodata fields can be removed individually and restored individually.
- Hidden standard fields are not rendered in the preview and do not block step validation.
- Custom fields can always be added, edited, or deleted.
- Community field packs remain optional and removable.
- Selecting a supported religion automatically suggests a respectful header symbol and adds optional religion-specific custom fields once per religion selection.
- Users can remove those suggested fields or change the symbol manually.

## Religious symbol presets

| Religion | Automatic symbol | Other selectable symbols |
| --- | --- | --- |
| Hindu | Ganeshji | Radha Krishna, Om, Swastik |
| Jain | Swastik | Ganeshji, Radha Krishna, Om |
| Muslim | Bismillah | Crescent & Star |
| Sikh | Khanda | Ik Onkar |
| Christian | Cross | None / manual choice |

The symbols are rendered as text/SVG-friendly glyphs inside the existing template header system, so they remain selectable text where applicable and do not require remote image requests.

## Hindu optional fields

- Kuldevi / Kuldevta
- Devak / family tradition
- Mosal / maternal family details
- Gotra
- Family roots / native place

All are optional and can be removed from the builder.

## SEO community hubs

Community landing pages now render their real template sample with a religion-aware symbol where applicable, include example community/preset fields, retain visible FAQs, and emit `CollectionPage` + `ItemList` schema alongside the existing FAQ schema.
