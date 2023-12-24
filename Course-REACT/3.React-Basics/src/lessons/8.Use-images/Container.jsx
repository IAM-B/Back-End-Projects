import fuji from "./assets/IAMB.png"
import triangle from "./assets/IAM-B.svg"

export default function Container() {

  // console.log(fuji);

  const id = 3

  return (
    <div>
      <h1>Use images</h1>

      <p>Image jpg/png/webp/...</p>

      <p>Use public folder</p>
      <img src={fuji} alt="Mont fuji" />

    </div>
  )
}
