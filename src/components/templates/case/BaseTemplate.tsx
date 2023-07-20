export interface IBaseTemplate {
  sampleTextProp: string
}

function BaseTemplate({ sampleTextProp }: IBaseTemplate) {
  return <div>{sampleTextProp}</div>
}

export default BaseTemplate
