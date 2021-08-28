const getHash = () => 
    window.location.hash.slice(1).split("/")[1] || "/";

export default getHash