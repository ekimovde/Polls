<script lang="ts" src="./component.ts"></script>
<style lang="scss" scoped src="./component.scss"></style>

<template>
  <div :class="b()">
    <div :class="b('poll-header')">
      <div :class="b('poll-header-inner')">
        <div :class="b('inner-wrapper')">
          <div :class="b('top')">
            <div :class="b('block')">
              <h1 :class="b('title')">
                {{ id }}
              </h1>

              <p :class="b('text')">
                {{ textAttributes.description }}
              </p>
            </div>

            <ui-dropdown :is-visible.sync="isVisible">
              <template slot="reference">
                <ui-button
                  v-if="isSettingsButtonShown"
                  :view="uiButtonView.action"
                  :size="uiButtonSize.xs"
                  :theme="uiButtonTheme.darkGrey"
                  @click="toggleVisible"
                >
                  {{ textAttributes.settings }}
                </ui-button>
              </template>

              <template slot="content">
                <ul :class="b('list')">
                  <li
                    v-for="(item, index) in dropdownList"
                    :key="index"
                    :class="b('inner-item')"
                  >
                    <ul :class="b('list')">
                      <li
                        v-for="(element, key) in item"
                        :key="key"
                        :class="b('item')"
                      >
                        <nuxt-link
                          v-slot="{ route }"
                          :class="b('link', { type: element.type })"
                          :to="{ name: element.routeName }"
                          :custom="true"
                        >
                          <ui-button
                            :view="uiButtonView.simple"
                            :size="uiButtonSize.byContent"
                            :theme="uiButtonTheme.default"
                            @click="open(route, element.type)"
                          >
                            <span>
                              {{ element.title }}
                            </span>
                          </ui-button>
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </template>
            </ui-dropdown>
          </div>

          <div :class="b('bottom')">
            <tab-links />

            <avatar-block
              src=""
              :size="avatarBlockSize.xs"
              :class="b('avatar')"
            />
          </div>
        </div>
      </div>
    </div>

    <div :class="b('inner-wrapper')">
      fassaf
    </div>

    <ui-modal :is-visible.sync="isModalVisible">
      <div>
        <h4 :class="b('modal-title')">
          {{ textAttributes.modalTitle }}
        </h4>

        <p :class="b('modal-description')">
          {{ textAttributes.modalDescription }}
        </p>

        <ui-button
          :view="uiButtonView.action"
          :size="uiButtonSize.xs"
          :theme="uiButtonTheme.red"
          :is-loading="isRemoveLoading"
          @click="remove"
        >
          {{ textAttributes.deletePoll }}
        </ui-button>
      </div>
    </ui-modal>
  </div>
</template>
