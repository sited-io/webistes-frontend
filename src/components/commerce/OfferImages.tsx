import _ from "lodash";
import { For, Show, createEffect, createSignal } from "solid-js";

import styles from "./OfferImages.module.scss";
import {
  OfferImageResponse,
  OfferResponse,
} from "~/services/sited_io/commerce/v1/offer_pb";

type Props = {
  readonly offer: () => OfferResponse;
};

export function OfferImages(props: Props) {
  const [selectedImage, setSelectedImage] = createSignal<
    OfferImageResponse | undefined
  >();

  createEffect(() => {
    if (_.isNil(props.offer().images.find((i) => isSelectedImage(i)))) {
      setSelectedImage(_.first(props.offer().images));
    }
  });

  function isSelectedImage(
    offerImage: OfferImageResponse | undefined
  ): boolean {
    return selectedImage()?.offerImageId === offerImage?.offerImageId;
  }

  function images() {
    return props.offer().images.sort((a, b) => Number(a.ordering - b.ordering));
  }

  function handleSelectImage(offerImageId: string) {
    setSelectedImage(_.find(props.offer().images, { offerImageId }));
  }

  return (
    <>
      <div class={styles.OfferImages}>
        <div class={styles.MainImage}>
          <div class={styles.ImageContainer}>
            <img class={styles.Image} src={selectedImage()?.imageUrl} alt="" />
          </div>
        </div>

        <Show when={!_.isEmpty(images()) && images()!.length > 1}>
          <div class={styles.ImageGallery}>
            <For each={images()}>
              {(image) => (
                <div
                  class={styles.PreviewItem}
                  onClick={() => handleSelectImage(image.offerImageId)}
                >
                  <img
                    class={styles.PreviewImage}
                    classList={{
                      [styles.ActivePreview]: isSelectedImage(image),
                    }}
                    src={image.imageUrl}
                    alt=""
                  />
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </>
  );
}
