import { useEffect, useRef, useState } from "react";
import Marzipano from 'marzipano';
import { useCreateScenes } from "./useCreateScenes";




export const useMarzipanoInitializer = (viewerOpts, scenes) => {

    const panoElementRef = useRef()
    const [viewerRef, setViewerRef] = useState();
    console.log(panoElementRef, 'panoelementref');

    useEffect(() => {

        if (panoElementRef.current !== null) {
            console.log('ingresè al if');
            const viewer = new Marzipano.Viewer(panoElementRef.current, viewerOpts);
            setViewerRef(viewer);
        }

    }, [panoElementRef, viewerOpts]);

    const { panoScenes } = useCreateScenes(viewerRef, scenes)


    return { panoElementRef};
};