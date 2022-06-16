<template>
  <div class="post-item q-px-lg q-py-md ">
    <div class="poster row">
      <q-avatar class="">
        <img src="https://placeimg.com/200/200/man">
      </q-avatar>
      <div class="poster-details column q-pl-md">
        <div class="text-bold">
          Johnny Salomanino
        </div>
        <div class="text-sm">
          Director @ Sahara Fashion
        </div>
        <div class="text-muted">
          12 March, 2022.
        </div>
      </div>
      <q-space />
      <div class="column">
        <div class="post-actions row">
          <div class="column justify-center">
            <q-btn outline rounded color="primary" class="premium-btn" no-caps label="Premium" />
          </div>
          <div class="column justify-center">
            <q-btn round size="sm" flat text-color="primary" icon="more_horiz" />
          </div>
        </div>
      </div>
    </div>
    <div class="column q-mt-sm text-md post-content">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing enim aperiam... <q-btn label = "View more" no-caps flat size="sm" dense text-color="primary"/>
      </p>
    </div>
    <div class="row justify-center">
      <q-img
        src="https://placeimg.com/200/200/nature"
        :ratio="16/9"
        v-ripple
        class="post-image-1"
        @click="showImage=!showImage"
      />
      <!-- Image Dialog -->
      <q-dialog
        v-model="showImage"
        full-width
      >
        <q-img
          src="https://placeimg.com/200/200/nature"
          :ratio="16/9"
          class="post-image-1"
          v-ripple
          @click="showImage=!showImage"
        />
      </q-dialog>
    </div>
    <div class="post-interactions row q-my-xs">
      <div class="likes">
        <q-btn flat rounded size="sm" no-caps>
          <span class="text-primary text-bold ">100 &nbsp;</span> <span class="text-bold ">Likes</span>
        </q-btn>
      </div>
      <q-space />
      <div class="comments">
        <q-btn flat rounded size="sm" no-caps @click="comments=!comments">
          <span class="text-primary text-bold ">5 &nbsp;</span> <span class="text-bold ">Comments</span>
        </q-btn>
      </div>
      <!-- Comments Dialog -->
      <q-dialog v-model="comments">
        <q-card>
          <q-card-section>
            <div>
              <span class="text-primary text-bold ">5</span> <span class="text-bold ">Comments</span>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 70vh" class="scroll">
            <div class="comment-item row">
              <div class="column">
                <q-btn round>
                  <q-avatar size="42px">
                    <img src="https://placeimg.com/200/200/woman">
                  </q-avatar>
                </q-btn>
              </div>
              <div class="comment text-sm">
                <div class="row">
                  <div class="user column">
                    <div class="text-bold">Mario DeMedici</div>
                    <div class="text-muted">Artist</div>
                  </div>
                  <q-space />
                  <div class="row">
                    <div class="text-muted column justify-center">Now</div>
                    &nbsp;
                    <q-btn round size="sm" flat text-color="primary" icon="more_horiz" />
                  </div>
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                <div class="row q-mt-xs comment-actions">
                  <q-space />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="thumb_up_off_alt" label="Like" />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="share" label="Share" />
                  <q-btn @click="showReply=!showReply" class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="reply" label="Reply" />
                </div>
                <div class="row" v-show="showReply">
                  <div class="col-12">
                    <div class="send-comments-form-input-container q-my-sm row">
                      <input placeholder="Add comment here..." class="text-sm" type="text" />
                      <q-space />
                      <div class="row ">
                        <div class="column justify-center">
                          <q-btn size="8px" icon="send" round flat text-color="primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-item row">
              <div class="column">
                <q-btn round>
                  <q-avatar size="42px">
                    <img src="https://placeimg.com/200/200/woman">
                  </q-avatar>
                </q-btn>
              </div>
              <div class="comment text-sm">
                <div class="row">
                  <div class="user column">
                    <div class="text-bold">Mario DeMedici</div>
                    <div class="text-muted">Artist</div>
                  </div>
                  <q-space />
                  <div class="row">
                    <div class="text-muted column justify-center">Now</div>
                    &nbsp;
                    <q-btn round size="sm" flat text-color="primary" icon="more_horiz" />
                  </div>
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                <div class="row q-mt-xs comment-actions">
                  <q-space />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="thumb_up_off_alt" label="Like" />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="share" label="Share" />
                  <q-btn @click="showReply=!showReply" class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="reply" label="Reply" />
                </div>
                <div class="row" v-show="showReply">
                  <div class="col-12">
                    <div class="send-comments-form-input-container q-my-sm row">
                      <input placeholder="Add comment here..." class="text-sm" type="text" />
                      <q-space />
                      <div class="row ">
                        <div class="column justify-center">
                          <q-btn size="8px" icon="send" round flat text-color="primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-item row">
              <div class="column">
                <q-btn round>
                  <q-avatar size="42px">
                    <img src="https://placeimg.com/200/200/woman">
                  </q-avatar>
                </q-btn>
              </div>
              <div class="comment text-sm">
                <div class="row">
                  <div class="user column">
                    <div class="text-bold">Mario DeMedici</div>
                    <div class="text-muted">Artist</div>
                  </div>
                  <q-space />
                  <div class="row">
                    <div class="text-muted column justify-center">Now</div>
                    &nbsp;
                    <q-btn round size="sm" flat text-color="primary" icon="more_horiz" />
                  </div>
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                <div class="row q-mt-xs comment-actions">
                  <q-space />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="thumb_up_off_alt" label="Like" />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="share" label="Share" />
                  <q-btn @click="showReply=!showReply" class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="reply" label="Reply" />
                </div>
                <div class="row" v-show="showReply">
                  <div class="col-12">
                    <div class="send-comments-form-input-container q-my-sm row">
                      <input placeholder="Add comment here..." class="text-sm" type="text" />
                      <q-space />
                      <div class="row ">
                        <div class="column justify-center">
                          <q-btn size="8px" icon="send" round flat text-color="primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-item row">
              <div class="column">
                <q-btn round>
                  <q-avatar size="42px">
                    <img src="https://placeimg.com/200/200/woman">
                  </q-avatar>
                </q-btn>
              </div>
              <div class="comment text-sm">
                <div class="row">
                  <div class="user column">
                    <div class="text-bold">Mario DeMedici</div>
                    <div class="text-muted">Artist</div>
                  </div>
                  <q-space />
                  <div class="row">
                    <div class="text-muted column justify-center">Now</div>
                    &nbsp;
                    <q-btn round size="sm" flat text-color="primary" icon="more_horiz" />
                  </div>
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                <div class="row q-mt-xs comment-actions">
                  <q-space />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="thumb_up_off_alt" label="Like" />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="share" label="Share" />
                  <q-btn @click="showReply=!showReply" class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="reply" label="Reply" />
                </div>
                <div class="row" v-show="showReply">
                  <div class="col-12">
                    <div class="send-comments-form-input-container q-my-sm row">
                      <input placeholder="Add comment here..." class="text-sm" type="text" />
                      <q-space />
                      <div class="row ">
                        <div class="column justify-center">
                          <q-btn size="8px" icon="send" round flat text-color="primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-item row">
              <div class="column">
                <q-btn round>
                  <q-avatar size="42px">
                    <img src="https://placeimg.com/200/200/woman">
                  </q-avatar>
                </q-btn>
              </div>
              <div class="comment text-sm">
                <div class="row">
                  <div class="user column">
                    <div class="text-bold">Mario DeMedici</div>
                    <div class="text-muted">Artist</div>
                  </div>
                  <q-space />
                  <div class="row">
                    <div class="text-muted column justify-center">Now</div>
                    &nbsp;
                    <q-btn round size="sm" flat text-color="primary" icon="more_horiz" />
                  </div>
                </div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                <div class="row q-mt-xs comment-actions">
                  <q-space />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="thumb_up_off_alt" label="Like" />
                  <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="share" label="Share" />
                  <q-btn @click="showReply=!showReply" class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="reply" label="Reply" />
                </div>
                <div class="row" v-show="showReply">
                  <div class="col-12">
                    <div class="send-comments-form-input-container q-my-sm row">
                      <input placeholder="Add comment here..." class="text-sm" type="text" />
                      <q-space />
                      <div class="row ">
                        <div class="column justify-center">
                          <q-btn size="8px" icon="send" round flat text-color="primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </q-card-section>

          <q-separator />

          <div class="column q-my-md">
            <div class="row q-mx-md">
              <div class="col-12 ">
                <div class="send-comments-form-input-container q-my-sm row">
                  <input placeholder="Add comment here..." class="text-sm" type="text" />
                  <q-space />
                  <div class="row ">
                    <div class="column justify-center">
                      <q-btn size="8px" icon="send" round flat text-color="primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-dialog>
    </div>
    <q-separator />
    <div class="q-mt-sm">
      <div class="last-comment row">
        <div class="column">
          <q-btn round>
            <q-avatar size="42px">
              <img src="https://placeimg.com/200/200/woman">
            </q-avatar>
          </q-btn>
        </div>
        <div class="comment text-sm">
          <div class="row">
            <div class="user column">
              <div class="text-bold">Mario DeMedici</div>
              <div class="text-muted">Artist</div>
            </div>
            <q-space />
            <div class="row">
              <div class="text-muted column justify-center">Now</div>
              &nbsp;
              <q-btn round size="sm" flat text-color="primary" icon="more_horiz" />
            </div>
          </div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit...
          <div class="row q-mt-xs comment-actions">
            <q-space />
            <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="thumb_up_off_alt" label="Like" />
            <q-btn class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="share" label="Share" />
            <q-btn @click="showReply=!showReply" class="q-ml-xs" flat color="accent" no-caps dense rounded size="xs" icon="reply" label="Reply" />
          </div>
          <div class="row" v-show="showReply">
            <div class="col-12">
              <div class="send-comments-form-input-container q-my-sm row">
                <input placeholder="Add comment here..." class="text-sm" type="text" />
                <q-space />
                <div class="row ">
                  <div class="column justify-center">
                    <q-btn size="8px" icon="send" round flat text-color="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post-actions row q-my-lg">
      <div class="col-md-5 col-sm-12 col-xs-12 q-pt-sm">
        <q-btn class="q-ml-sm" flat color="accent" no-caps dense rounded size="sm" icon="thumb_up_off_alt" label="Like" />
        <q-btn class="q-ml-sm" flat color="accent" no-caps dense rounded size="sm" icon="share" label="Share" />
        <q-btn class="q-ml-sm" flat color="accent" no-caps dense rounded size="sm" icon="bookmark_border" label="Bookmark" />
      </div>
      <div class="col-md-7 col-sm-12 col-xs-12">
        <div class="send-comments-form-input-container q-my-sm row">
          <input placeholder="Add comment here..." class="text-sm" type="text" />
          <q-space />
          <div class="row ">
            <div class="column justify-center">
              <q-btn size="8px" icon="send" round flat text-color="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-separator />
  </div>
</template>
<script>

export default {
  name: "PostItemComponent",
  data(){
    return {
      showReply: false,
      showImage: false,
      comments: false
    }
  }
}
</script>
