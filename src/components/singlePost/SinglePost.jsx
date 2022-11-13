import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Although definitions of music vary wildly throughout the world, every known culture partakes in it, and music is thus considered a cultural universal. The origins of music remain highly contentious; commentators often relate it to the origin of language, with much disagreement surrounding whether music arose before, after or simultaneously with language. Many theories have been proposed by scholars from a wide range of disciplines, though none have achieved wide approval. Most cultures have their own mythical origins concerning the invention of music, generally rooted in their respective mythological, religious or philosophical beliefs.

The music of prehistoric cultures is first firmly dated to c. 40,000 BP of the Upper Paleolithic by evidence of bone flutes, though it remains unclear whether or not the actual origins lie in the earlier Middle Paleolithic period (300,000 to 50,000 BP). There is little known about prehistoric music, with traces mainly limited to some simple flutes and percussion instruments. However, such evidence indicates that music existed to some extent in prehistoric societies such as the Xia dynasty and the Indus Valley civilisation. Upon the development of writing, the music of literate civilizations—ancient music—was present in the major Chinese, Egyptian, Greek, Indian, Persian, Mesopotamian, and Middle Eastern societies. It is difficult to make many generalizations about ancient music as a whole, but from what is known it was often characterized by monophony and improvisation. In ancient song forms, the texts were closely aligned with music, and though the oldest extant musical notation survives from this period, many texts survive without their accompanying music, such as the Rigveda and the Shijing Classic of Poetry. The eventual emergence of the Silk Road and increasing contact between cultures led to the transmission and exchange of musical ideas, practices, and instruments. Such interaction led to the Tang dynasty's music being heavily influenced by Central Asian traditions, while the Tang dynasty's music, the Japanese gagaku and Korean court music each influenced each other.
          <br />
          <br />
          Music arose as an elaborate form of sexual selection, perhaps arising in mating calls.[24] This theory, perhaps the first significant one on music's origins,[25] is generally credited to Charles Darwin.[26] It first appeared in Darwin's 1871 book The Descent of Man, and Selection in Relation to Sex,[9][27] and has since been criticized as there is no evidence that either human sex is "more musical" thus no evidence of sexual dimorphism; there are currently no other examples of sexual selection that do not include considerable sexual dimorphism.[28] Recent commentators, citing music's use in other animals's mating systems, have nonetheless propagated and developed Darwin's theory; such scholars include Peter J.B. Slater, Katy Payne, Björn Merker, Geoffrey Miller and Peter Todd.[29]
        </p>
      </div>
    </div>
  );
}
