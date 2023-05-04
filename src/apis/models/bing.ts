export interface BingResponse {
    _type: string
    queryContext: QueryContext
    webPages: WebPages
    entities?: Entities
    images?: BingImages
    relatedSearches?: BingRelatedSearches
    videos?: BingVideos
    rankingResponse: RankingResponse
  }
  
  export interface QueryContext {
    originalQuery: string
  }
  
  export interface WebPages {
    webSearchUrl: string
    totalEstimatedMatches: number
    value: ResponseValue[]
    someResultsRemoved: boolean
  }
  
  export interface ResponseValue {
    id: string
    name: string
    url: string
    isFamilyFriendly: boolean
    displayUrl: string
    snippet: string
    deepLinks?: DeepLink[]
    dateLastCrawled: string
    language: string
    isNavigational: boolean
    thumbnailUrl?: string
  }
  
  export interface DeepLink {
    name: string
    url: string
    snippet: string
  }
  
  export interface Entities {
    value: Value2[]
  }
  
  export interface Value2 {
    id: string
    contractualRules: ContractualRule[]
    webSearchUrl: string
    name: string
    url: string
    image: Image
    description: string
    entityPresentationInfo: EntityPresentationInfo
    bingId: string
  }
  
  export interface ContractualRule {
    _type: string
    targetPropertyName: string
    mustBeCloseToContent: boolean
    license?: License
    licenseNotice?: string
    text?: string
    url?: string
  }
  
  export interface License {
    name: string
    url: string
  }
  
  export interface Image {
    name: string
    thumbnailUrl: string
    provider: Provider[]
    hostPageUrl: string
    width: number
    height: number
    sourceWidth: number
    sourceHeight: number
  }
  
  export interface Provider {
    _type: string
    url: string
  }
  
  export interface EntityPresentationInfo {
    entityScenario: string
    entityTypeHints: string[]
  }
  
  export interface BingImages {
    id: string
    readLink: string
    webSearchUrl: string
    isFamilyFriendly: boolean
    value: BingImage[]
  }
  
  export interface BingImage {
    webSearchUrl: string
    name: string
    thumbnailUrl: string
    datePublished: string
    contentUrl: string
    hostPageUrl: string
    contentSize: string
    encodingFormat: string
    hostPageDisplayUrl: string
    width: number
    height: number
    thumbnail: Thumbnail
  }
  
  export interface Thumbnail {
    width: number
    height: number
  }
  
  export interface BingRelatedSearches {
    id: string
    value: BingRelatedSearch[]
  }
  
  export interface BingRelatedSearch {
    text: string
    displayText: string
    webSearchUrl: string
  }
  
  export interface BingVideos {
    id: string
    readLink: string
    webSearchUrl: string
    isFamilyFriendly: boolean
    value: BingVideo[]
    scenario: string
  }
  
  export interface BingVideo {
    webSearchUrl: string
    name: string
    description: string
    thumbnailUrl: string
    datePublished: string
    publisher: Publisher[]
    creator: Creator
    isAccessibleForFree: boolean
    contentUrl: string
    hostPageUrl: string
    encodingFormat: string
    hostPageDisplayUrl: string
    width: number
    height: number
    duration: string
    motionThumbnailUrl?: string
    embedHtml: string
    allowHttpsEmbed: boolean
    viewCount: number
    thumbnail: Thumbnail2
    allowMobileEmbed: boolean
    isSuperfresh: boolean
  }
  
  export interface Publisher {
    name: string
  }
  
  export interface Creator {
    name: string
  }
  
  export interface Thumbnail2 {
    width: number
    height: number
  }
  
  export interface RankingResponse {
    mainline: Mainline
    sidebar: Sidebar
  }
  
  export interface Mainline {
    items: Item[]
  }
  
  export interface Item {
    answerType: string
    resultIndex?: number
    value: Value6
  }
  
  export interface Value6 {
    id: string
  }
  
  export interface Sidebar {
    items: Item2[]
  }
  
  export interface Item2 {
    answerType: string
    resultIndex: number
    value: Value7
  }
  
  export interface Value7 {
    id: string
  }
  