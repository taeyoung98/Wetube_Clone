// render("템플릿", {템플릿에 추가할 정보가 담긴 객체})
// views 폴더에서 파일명이 템플릿 이고 확장자가 .pug인 템플릿 파일은 찾은 후에 보여줌
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });

export const videos = (req, res) => res.render("videos", { pageTitle: "Video" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload video" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete video" });
