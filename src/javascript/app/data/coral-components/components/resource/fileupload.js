const fielupload = {
  name: 'Fileupload',
  tag: 'FU',
  category: 'Resource',
  description: 'Fielupload / Image',
  id: 'fielupload',
  src: `<input class="_"
    type="text"
    name="{id}"
    id="{id}"
  />`,
  xml: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/hidden"
  fieldDescription="{label}"
  fieldLabel="{label}"
  name="./{id}"
  required="{Boolean:required}"
  value="{value}"/>`,
};

export default fielupload;