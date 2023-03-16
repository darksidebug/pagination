<template>
  <div>
    <div
      v-show="totalPage > 0"
      class="pagination--wrapper"
    >
      <span class="hidden">{{ currentSelectedPage }}</span>
      <div class="pagination">
        <a
          ref="prev-pagination-ref"
          class="pagination--button"
          :class="[{'disabled': currentPage === 1}]"
          @click="prev(currentPage), currentPageVal > 1 ? emits('update', currentPage) : null"
        >&#8249;</a>
        <a
          ref="prev-current-pagination-ref"
          :class="['pagination--button', {'selected': currentPage === 1}]"
          @click="goTo(1), currentPageVal > 1 ? emits('update', currentPage) : null"
        >1</a>
        <a
          v-show="showPrevDot"
          class="pagination--dot"
        >...</a>
        <a
          v-for="i in pageCountValue()"
          v-show="totalPage > 2"
          :key="i"
          :ref="`page-count-${i}-ref`"
          :class="['pagination--button', {'selected': currentPage === (i + counter)}]"
          @click="page((i + counter)), emits('update', currentPage)"
        >{{ (i + counter) }}</a>
        <a
          v-show="showNextDot && checkTotalPageValue()"
          class="pagination--dot"
        >...</a>
        <a
          v-show="totalPage > 1"
          ref="next-current-pagination-ref"
          :class="['pagination--button', {'selected': currentPage === totalPage}]"
          @click="goTo(totalPage), currentPageVal < totalPage ? emits('update', currentPage) : null"
        >{{ totalPageCount }}</a>
        <a
          ref="next-pagination-ref"
          class="pagination--button"
          :class="[{'disabled': currentPage === totalPage}]"
          @click="next(currentPage), currentPageVal < totalPage ? emits('update', currentPage) : null"
        >&#8250;</a>
      </div>
    </div>
    <div
      v-show="totalPage > 0"
      class="pagination--page-count"
    >
      全{{ totalResultCount }}件中&nbsp;
      <span
        v-if="isFetching"
        :class="[{'fetching': isFetching}]"
      ><span>.</span><span>.</span><span>.</span>&nbsp;</span>
      <span v-else>
        {{ currentPage < 2 ? 1 : (((currentPage - 1) * perPage) + 1) }} -
        {{ currentPage === totalPage ? (totalResultCount) :(currentPage * perPage) }}
      </span>件
    </div>
  </div>
</template>

<script setup>
const prop = defineProps({
  totalResultCount: {
		type: Number,
		default: 0
	},
  perPage: {
		type: Number,
		default: 25
  },
  currentPageVal: {
    type: Number,
    default: 1
  }, 
  isFetching: {
    type: Boolean,
    default: false,
    required: true
  }
})

const pageCount = ref(2)
const currentPage = ref(1)
const totalPage = ref(0)
const counter = ref(1)
const jumpCount = ref(3)
const showNextDot = ref(true)
const showPrevDot = ref(false)

const emit = defineEmits(['paginate'])

const currentSelectedPage = computed({
  get(){
    resetCounter(prop.currentPageVal)
    return currentPage.value = prop.currentPageVal
  },
  set(value){
    return currentPage.value = value
  }
})

const resetCounter = (page) => {
  if(page === 1) {
    counter.value = 1
  }
}

const totalPageCount = computed({
  get() {
    return totalPage.value = Math.ceil(prop.totalResultCount / prop.perPage)
  },
  set(value){
    return totalPage.value = value
  }
})

const page = (page) => {
  currentSelectedPage.value = page

  if(page <= 4){
    if(page <= 3){
      showDots(true, false)
      counter.value = 1
      pageCount.value = 2
      return
    }

    showDots(true, false)
    counter.value = 1
    pageCount.value = 4
    return
  }

  pageTick(page, true)
};

const goTo = (page) => {
  currentSelectedPage.value = page

  if(page === 1){
    showDots(true, false)
    defaultPaginationRun(page, 0, 2)
    return
  }

  pageTick(page, false)
}

const prev = (page) => {
  if(page > 1){
    currentSelectedPage.value = page -= 1

    if(currentPage.value > 3){
      if(currentPage.value === 4){
        showDots(true, false)
        defaultPaginationRun(page, 3, 4)
        return
      }

      pageTick(page, true)
      return
    }

    showDots(true, false)

    if(currentPage.value === 3){
      pageCount.value = 3
      counter.value = 1
      return
    }

    pageCount.value = 2
    counter.value = 1
    return
  }
};

const next = (page) => {
  currentSelectedPage.value = page += 1

  if(currentPage.value >= totalPage.value){
    return currentSelectedPage.value = totalPage.value
  }

  if(currentPage.value > 3){
    if(currentPage.value === 4){
      if(currentPage.value + 3 <= totalPage.value){
        showDots(true, false)
        pageCount.value = 4
        counter.value = 1
        return
      }

      showDots(false, (totalPage.value > 6 ? true : false))
      pageCount.value = (totalPage.value === 6 ? 4 : 3)
      counter.value = 1
      return
    }

    pageTick(page, true)
  }
}

const isTotalPageCountEven = () => {
  return totalPage.value % 2 === 0
}

const currentPageEqualOrGreaterTotalPage = (is_greater, plus_or_minus_count) => {
  if(is_greater) return (currentPage.value > (totalPage.value - plus_or_minus_count))
  return ((currentPage.value + plus_or_minus_count) === totalPage.value)
}

const defaultPaginationRun = (page, minus_count, page_count) => {
  counter.value = page - minus_count
  pageCount.value = page_count
}

const showDots = (show_next, show_prev) => {
  showNextDot.value = show_next
  showPrevDot.value = show_prev
}

const pageTick = (page, perform_else) => {
  if(isTotalPageCountEven()){
    if(
      currentPageEqualOrGreaterTotalPage(false, 3) || 
      currentPageEqualOrGreaterTotalPage(true, 3)
    ){
      showDots(false, totalPage.value > 6 ? true : false)
      defaultPaginationRun(totalPage.value, 5, 4)
      return
    }
    if(perform_else){
      showDots(true, true)
      defaultPaginationRun(page, 2, 3)
      return
    }
  }

  if(
    currentPageEqualOrGreaterTotalPage(false, 2) || 
    currentPageEqualOrGreaterTotalPage(true, 2)
  ){
    showDots(false, true)
    defaultPaginationRun(totalPage.value, 4, 3)
    return
  }

  if(perform_else){
    showDots(true, true)
    defaultPaginationRun(page, 2, 3)
    return
  }
}

const checkTotalPageValue = () => {
  if(totalPage.value > jumpCount.value && totalPage.value > (jumpCount.value + 1)) return true
  return false
}

const pageCountValue = () => {
  if(totalPage.value === 3) return pageCount.value - 1
  return pageCount.value
}
</script>

<style lang="scss">
@import '../assets/style/pagination';
</style>