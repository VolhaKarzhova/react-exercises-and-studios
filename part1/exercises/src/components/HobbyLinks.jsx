export default function HobbyList() {
    const hobbyLinks = [
        "https://stitchedmodern.com/blogs/news/a-beginners-guide-to-cross-stitch?srsltid=AfmBOoqrd-Mf_NkSSvbfVOFIjn6k5V6Dl1aWKW0Kpse3qLC90gSAcIVY",
        "https://www.alltrails.com/us/missouri/st-louis--2"
    ]

    return (
        <div>
            <h3>My hobbies</h3>
            <div>
            <a href={hobbyLinks[0]}>Cross Stitching Guide</a>
            </div>
            <div>
            <a href={hobbyLinks[1]}>Hiking trails</a>
            </div>
        </div>
    );
}