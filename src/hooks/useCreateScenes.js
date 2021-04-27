import Marzipano from 'marzipano';

//Create scenes
export const useCreateScenes = (viewer, scenes) => {
    console.log(viewer, 'create sceness');

    const panoScenes = scenes.map((scene) => {
        const { id, initialViewParameters, levels, faceSize } = scene;
        const urlPrefix = "tiles";
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
        })

        return {
            scene,
            sceneToShow,
            view
        }
    })
    return panoScenes;
};