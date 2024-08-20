import { For, Match, Switch } from "solid-js";
import { Section } from "~/components/layout/Section";
import {
  HeaderComponent,
  LinkElement,
  ParagraphComponent,
  StaticPageResponse,
} from "~/services/sited_io/websites/v1/static_page_pb";

type Props = {
  readonly staticPage: StaticPageResponse;
};

export function StaticPageV1(props: Props) {
  return (
    <>
      <Section class="prose">
        <For each={props.staticPage.components}>
          {(component) => (
            <>
              <Switch>
                <Match when={component.componentType?.inner.case === "header"}>
                  <ViewHeader
                    headerComponent={
                      component.componentType?.inner.value as HeaderComponent
                    }
                  />
                </Match>
                <Match
                  when={component.componentType?.inner.case === "paragraph"}
                >
                  <ViewParagraph
                    paragraphComponent={
                      component.componentType?.inner.value as ParagraphComponent
                    }
                  />
                </Match>
              </Switch>
            </>
          )}
        </For>
      </Section>
    </>
  );
}

type HeaderProps = {
  readonly headerComponent: HeaderComponent;
};

function ViewHeader(props: HeaderProps) {
  return (
    <>
      <Switch>
        <Match when={props.headerComponent.level === 1}>
          <h1>{props.headerComponent.content}</h1>
        </Match>
        <Match when={props.headerComponent.level === 2}>
          <h2>{props.headerComponent.content}</h2>
        </Match>
        <Match when={props.headerComponent.level === 3}>
          <h3>{props.headerComponent.content}</h3>
        </Match>
        <Match when={props.headerComponent.level === 4}>
          <h4>{props.headerComponent.content}</h4>
        </Match>
        <Match when={props.headerComponent.level === 5}>
          <h5>{props.headerComponent.content}</h5>
        </Match>
        <Match when={props.headerComponent.level === 6}>
          <h6>{props.headerComponent.content}</h6>
        </Match>
      </Switch>
    </>
  );
}

type ParagraphProps = {
  readonly paragraphComponent: ParagraphComponent;
};

function ViewParagraph(props: ParagraphProps) {
  return (
    <>
      <p>
        <For each={props.paragraphComponent.content}>
          {(inlineElement) => (
            <>
              <Switch>
                <Match when={inlineElement.elementType.case === "text"}>
                  <span>{inlineElement.elementType.value?.text}</span>
                </Match>
                <Match when={inlineElement.elementType.case === "link"}>
                  <a
                    href={(inlineElement.elementType.value as LinkElement).url}
                  >
                    {(inlineElement.elementType.value as LinkElement).text}
                  </a>
                </Match>
              </Switch>
            </>
          )}
        </For>
      </p>
    </>
  );
}
