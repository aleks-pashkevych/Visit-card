import del from "del";

export const deleteFile = () => {
   return del(app.path.clean);
}