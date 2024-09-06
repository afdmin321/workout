export const useBase64 = () => {
    const encoding = (file: File ): Promise<string>   => {
            return  new Promise((resolve, reject) => {
                const fr = new FileReader();
                fr.onload = () => resolve(fr.result as string);
                fr.onerror = (err) => reject(err);
                fr.readAsDataURL(file);
              });
    }

    return { encoding }
}