<script lang="ts">
  let {
    fg = '#d1d2d4',
    bg = '#838484',
    horns = bg,
    ...props
  } = $props<{
    fg?: string
    bg?: string
    horns?: string
    class?: string
  }>()
</script>

<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" {...props}>
  <polygon
    fill={bg}
    points="128.1,66 116.1,108 112.1,140 80.1,148 48.1,140 44.1,108 32.1,66 48.1,44 80.1,40 112.1,44 "
  />
  <polygon fill={horns} points="20.1,40 46.6,12 36.1,36 46.6,44 32.1,64 " />
  <polygon
    fill={horns}
    points="140.1,40 113.6,12 124.1,36 113.6,44 128.1,64 "
  />
  <polygon fill={fg} points="56.1,88 72.1,88 52.1,76 " />
  <polygon fill={fg} points="76.1,136 66.1,130 68.1,134 " />
  <polygon fill={fg} points="94.1,130 84.1,136 92.1,134 " />
  <polygon fill={fg} points="108.1,76 88.1,88 104.1,88 " />
  <polygon fill={fg} points="92,54 80.1,52 68.1,54 78.1,54 80.1,124 82.1,54 " />
</svg>
