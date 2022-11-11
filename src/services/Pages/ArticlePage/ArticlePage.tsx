import React, {FC} from 'react';
import "./articlePageStyles.scss";
const ArticlePage: FC = () => {
    const articleInfo = {
        url: "https://topwar.ru/204874-minoborony-ukrainy-posle-uhoda-armii-rf-iz-hersona-vsu-smogut-obstrelivat-puti-ee-snabzhenija-iz-kryma.html",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices massa eget nisl pharetra mattis. Morbi ac massa ut lectus gravida.",
        date: "22.05.2022 13:48",
        author: "Krotov Peter",
        commentsAmount: 167,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices massa eget nisl pharetra mattis. Morbi ac massa ut lectus gravida tempor quis et massa. Quisque aliquet ligula at mi bibendum hendrerit. Curabitur non bibendum augue, ut consequat dolor. Morbi accumsan dui orci, in ultricies dui facilisis eget. Ut sed velit posuere, posuere purus in, porta ligula. In aliquet ac erat non lacinia.\n" +
            "\n" +
            "In vitae sem dolor. Nulla a sollicitudin dolor. Fusce vestibulum quam nunc, et accumsan lectus efficitur efficitur. Praesent at metus vel metus dignissim dignissim. Pellentesque non diam tellus. Fusce eu sem eget sem hendrerit sollicitudin. Donec pulvinar sapien metus, quis pretium tortor luctus at. Integer blandit nibh sed libero efficitur, dapibus auctor mauris dignissim. Duis imperdiet nisi eget auctor imperdiet.\n" +
            "\n" +
            "Quisque gravida varius odio eu iaculis. Aenean vel metus nibh. Nulla a ligula dolor. Suspendisse mattis eu diam a suscipit. Aliquam felis nibh, euismod at pulvinar ut, eleifend sed risus. Duis rutrum ornare purus ut tincidunt. Nullam malesuada luctus tortor sed iaculis.\n" +
            "\n" +
            "Mauris gravida pharetra libero, cursus sagittis tellus laoreet id. Sed efficitur justo viverra nunc sagittis, malesuada ornare nibh pulvinar. Fusce pharetra augue lectus. Nunc et dui mattis, convallis odio in, convallis elit. Donec quis lobortis purus. Mauris vitae molestie dolor, a faucibus est. Donec vel laoreet sapien.\n" +
            "\n" +
            "Sed nibh magna, ultrices ut suscipit a, semper non nulla. Pellentesque at ligula egestas, feugiat justo et, interdum purus. Phasellus quis sagittis odio. Pellentesque blandit interdum nunc sed accumsan. Curabitur vel diam vel lorem malesuada auctor quis vel dui. Maecenas a diam dictum velit blandit lobortis. Integer ac interdum diam, quis faucibus magna. Donec eu mattis justo. In eget sagittis massa. Ut tempus, mauris nec tempus consequat, dolor nibh gravida elit, eu suscipit nulla dui ut orci. Nam vel mauris ex. Fusce vestibulum magna vitae purus venenatis, ut scelerisque odio dapibus. Praesent urna mauris, viverra a magna sit amet, commodo consectetur enim. Quisque condimentum arcu vel nisi aliquam, vel venenatis lacus ultrices. Donec rhoncus ligula sed sem lacinia egestas. Mauris lacus dolor, mollis vitae malesuada tristique, ornare at nulla.\n" +
            "\n" +
            "Nulla nec dapibus libero, a consequat felis. Suspendisse vel neque dolor. Donec laoreet, turpis sit amet varius posuere, libero lacus suscipit sapien, nec dignissim felis ipsum a dui. Proin efficitur ante augue, eget tristique tellus dapibus id. Nullam fringilla imperdiet dui, ac vestibulum eros pellentesque in. Curabitur non ullamcorper quam. Fusce tempor aliquet neque. Morbi nec dui at nisl pharetra commodo in eu nulla. Nullam aliquam, nisi ut dignissim luctus, sem leo imperdiet magna, consequat sollicitudin metus odio feugiat turpis. Curabitur sagittis, diam non dictum porttitor, augue velit lobortis nibh, et congue libero velit vitae felis. Ut tristique cursus elementum. Vestibulum ornare nisl eget lectus finibus, sed egestas sem rhoncus. Curabitur ante eros, aliquam non lacus id, accumsan sodales ipsum. Pellentesque vitae ligula vulputate, sollicitudin ligula sed, commodo dolor.\n" +
            "\n" +
            "Praesent consequat, velit ut efficitur auctor, nisl mi viverra mauris, ac porta lectus magna ut turpis. Curabitur accumsan tincidunt imperdiet. Aliquam pharetra sem eu dui ornare egestas. Mauris facilisis mollis tempor. Duis et lacus sed nisl aliquet volutpat non vel sem. Donec lobortis maximus lectus, eget dictum mauris consequat id. Vivamus faucibus gravida ultrices. Sed et tempor ipsum. Nam at metus eros. Nunc non laoreet est. Nam facilisis orci non metus laoreet, eget tempus arcu accumsan. Aliquam diam odio, aliquet sit amet semper in, finibus vel sem. Vestibulum varius sollicitudin augue sed rutrum. Aenean nec eros purus. Praesent nulla nibh, efficitur vitae ipsum ac, luctus consequat tortor.\n" +
            "\n" +
            "In ut consequat lorem. Nulla rutrum sapien non nisl sodales, sit amet dapibus nunc dictum. Cras molestie neque a turpis finibus facilisis. Suspendisse tincidunt eros sit amet nisl ultricies consectetur. Donec luctus ullamcorper ante, ac lacinia massa tincidunt rutrum. Quisque at mi non nulla fringilla accumsan sed a felis. Quisque imperdiet neque in arcu malesuada, condimentum bibendum sem pretium. Fusce ultrices elit vel nisl tempor suscipit ac a turpis. Suspendisse condimentum risus at lectus tristique fringilla.\n" +
            "\n" +
            "Vivamus consectetur dolor ut vestibulum tristique. Fusce vel enim eu sem convallis condimentum. Nullam scelerisque orci ut lacus rhoncus, eu sagittis ipsum luctus. Sed laoreet consectetur lorem nec ullamcorper. Etiam eu ante ut enim pellentesque condimentum ut vitae velit. Quisque efficitur magna et odio sollicitudin interdum. Praesent dignissim tempus mattis. Donec vestibulum mattis lacus sit amet convallis. Curabitur rhoncus, magna nec varius pulvinar, nulla ipsum ullamcorper enim, eget rhoncus tortor diam vitae ipsum. Vivamus ullamcorper mattis lorem sed interdum. In semper vitae nunc a ornare. Fusce non urna urna. Nullam id sapien non orci bibendum gravida. Duis non nisl vitae metus porta porta.\n" +
            "\n" +
            "Ut vehicula eleifend tellus, ut maximus erat hendrerit sed. Nullam fringilla orci eget finibus vestibulum. Praesent elit massa, viverra sed condimentum sit amet, lobortis auctor dui. Donec id eros quam. Nullam id urna ac nibh faucibus pharetra. Mauris hendrerit vitae lacus ut malesuada. Praesent nulla turpis, dictum ut lobortis vel, rutrum at tortor.\n" +
            "\n" +
            "Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac semper sapien, nec posuere lectus. Donec in semper arcu. Nunc convallis metus a mi interdum bibendum. Duis nisi lacus, faucibus vitae euismod ullamcorper, scelerisque sit amet ipsum. In hac habitasse platea dictumst. Vestibulum eu suscipit leo, a pulvinar neque. Aenean suscipit erat at sem pharetra, in luctus tortor mattis.\n" +
            "\n" +
            "Vestibulum nec dignissim orci. Suspendisse pharetra volutpat commodo. Praesent id facilisis velit, ut congue eros. Ut sodales arcu et ullamcorper aliquet. Sed sodales lacus lacus, vestibulum consectetur justo condimentum sit amet. Aliquam vestibulum orci vel porta lacinia. Curabitur pharetra condimentum nisl, vel semper elit laoreet eget. Etiam viverra lobortis felis. Proin semper dui eu purus dignissim scelerisque. Proin fermentum est non diam suscipit, eu molestie dolor cursus. Proin quis orci vitae dolor elementum consequat et sed nisi. Nulla fermentum urna justo, at interdum tellus convallis nec. Quisque eu odio at libero suscipit bibendum.\n" +
            "\n" +
            "Nullam vestibulum in quam placerat scelerisque. Donec viverra nisl felis, eget rutrum purus sodales at. Phasellus id suscipit leo. Donec nec sapien magna. Nam mollis pretium lectus, non tincidunt dui. Etiam id pharetra lorem, sit amet sagittis.",
        comments: [
            {root: "Hello!11", children: [
                    {root: "Hello21!", children:[
                            {root: "Hello31!", children:[]}
                        ]}  ,
                    {root: "Hello22!", children:[
                            {root: "Hello31!", children:[]}
                        ]}  ,
                ]},
            {root: "Hello!12" , children: []}

        ]
    }
    return (
        <div className="articleContainer">
            <h1 className="articleName">{articleInfo.name}</h1>
            <div className="articleDescription">
                <p className="articleDate">{articleInfo.date}</p>
                <div className="articleCommentsAmount">
                    <p>{articleInfo.commentsAmount}</p>
                    <div className="articlesLogo"></div>
                </div>
            </div>
            <div className="articleContent">{articleInfo.content}</div>
            <div className="articlePostContent">
                <p className="articleAuthor">{articleInfo.author}</p>
                <p className="articleLink"> Original: {articleInfo.url}</p>
            </div>


            <div className="commentsContainer">
                <div className = "commentTop">
                    <p className="commentsHeader">Comments</p>
                    <div className="reloadBut"></div>
                </div>

                <div className="commentPool">
                    {
                        articleInfo.comments.map((elem:any)=>{
                            return <div className="comment">{elem.root}</div>;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;