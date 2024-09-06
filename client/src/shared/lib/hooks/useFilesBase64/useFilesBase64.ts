import { useBase64 } from "../useBase64/useBase64";

const { encoding } = useBase64()
export const useFilesBase64 = async (files: FileList): Promise<string[]> => {
    const fileList: string[] = [];
    for (let i = 0; i < files.length; i++) {
        const result = await encoding(files[i]);
        fileList.push(result);
    }
    return fileList;
};