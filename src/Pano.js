import React, { useEffect, useRef } from 'react';
import Marzipano from 'marzipano';

export const Pano = ({ settings: viewerOpts, scenes }) => {


    const panoElementRef = useRef(null)
    useEffect(() => {

        const viewer = new Marzipano.Viewer(panoElementRef.current, viewerOpts);
        const panoScenes = scenes.map((scene) => {

            const { id, initialViewParameters, levels, faceSize } = scene;
            const urlPrefix = "//www.marzipano.net/media";
            const source = Marzipano.ImageUrlSource.fromString(
                urlPrefix + "/" + id + "/{z}/{f}/{y}/{x}.jpg",
                { cubeMapPreviewUrl: urlPrefix + "/" + id + "/preview.jpg" }
            );
            const limiter = Marzipano.RectilinearView.limit.traditional(faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
            const view = new Marzipano.RectilinearView(initialViewParameters, limiter);
            const geometry = new Marzipano.CubeGeometry(levels);

            const sceneToShow = viewer.createScene({
                view,
                source,
                geometry,
                pinFirstLevel: true
            });

            return {
                scene,
                sceneToShow,
                view
            }
        });



        //const { sceneToShow } = panoScenes[0];
        //console.log(sceneToShow, 'scene to show');
        //panoScenes[0].sceneToShow.switchTo();
        panoScenes.map(newScene => newScene.sceneToShow.switchTo())
        //console.log(viewer.hasScene(panoScenes[0].sceneToShow), 'has scene');
        //console.log(viewer.listScenes(), 'list of scenes');
        //const listOfEscenes = viewer.listScenes();


    }, [scenes, viewerOpts])


    return (
        <div>
            <h1>Pano</h1>
            <div id="panoElement" ref={panoElementRef}>

            </div>
        </div>
    )
};