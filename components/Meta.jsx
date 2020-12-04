const Meta = ({children, desc, image, title, url, type, keywords}) => {
    let keywordsString = "";
    keywords?.map((item, index) => {
        if(index === 0){
            keywordsString += item;
        }else{
            keywordsString += ", "+item;
        }
    });
    return (
        <>
            <meta name="title" content={desc} />
            <meta name="description" content={desc} />
            <meta name="keywords" content={keywordsString} />
            <meta property="og:url"                content={url} />
            <meta property="og:type"               content={type ? type : "video"} />
            <meta property="og:title"              content={title} />
            <meta property="og:description"        content={desc} />
            <meta property="og:image"              content={image} />
            {children}
        </>
    )
}

export default Meta;