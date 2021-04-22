import { atom } from "recoil";

const selectedObjectState = atom({
  key: "selectedObjectState",
  default: {
    objectID: null,
    isHighlight: false,
    accessionNumber: "",
    accessionYear: "",
    isPublicDomain: true,
    primaryImage:
      "",
    primaryImageSmall:
      "",
    additionalImages: [

    ],
    constituents: null,
    department: "",
    objectName: "",
    title: "",
    culture: "",
    period: "",
    dynasty: "",
    reign: "",
    portfolio: "",
    artistRole: "",
    artistPrefix: "",
    artistDisplayName: "",
    artistDisplayBio: "",
    artistSuffix: "",
    artistAlphaSort: "",
    artistNationality: "",
    artistBeginDate: "",
    artistEndDate: "",
    artistGender: "",
    artistWikidata_URL: "",
    artistULAN_URL: "",
    objectDate: "ca. 1870",
    objectBeginDate: 1867,
    objectEndDate: 1870,
    medium: "",
    dimensions: "",
    measurements: [

    ],
    creditLine: "",
    geographyType: "",
    city: "",
    state: "",
    county: "",
    country: "",
    region: "",
    subregion: "",
    locale: "",
    locus: "",
    excavation: "",
    river: "",
    classification: "",
    rightsAndReproduction: "",
    linkResource: "",
    metadataDate: "",
    repository: "",
    objectURL: "",
    tags: null,
    objectWikidata_URL: "",
    isTimelineWork: false,
    GalleryNumber: "",
  },
});


export {selectedObjectState}