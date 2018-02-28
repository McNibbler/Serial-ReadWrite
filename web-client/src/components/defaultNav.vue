<template>
 <div id="nav">
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
         <div class="navbar-header">
            <a class="navbar-brand">Arduino to Cloud v1.0</a>
            <router-link class="navbar-brand" to="/"><a>Line Plot</a></router-link>
            <router-link class="navbar-brand" to="/histogram"><a>Histogram</a></router-link>
         </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "defaultNav"
};
</script>