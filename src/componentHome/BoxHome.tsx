import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

const BoxHome = (props: { image: string | undefined; button: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => {
  return (
    <div className="s-box">
      <div className="s-b img">
        <img src={props.image} alt="{props.alte}" />
      </div>
      <div className="s-b-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href="#" className="cv-btn">{props.button}</a>
      </div>
    </div>
  )
}

export default BoxHome