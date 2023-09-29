
<template>
   
</template>
  
<script>
</script>
<style>
/*------ Settings ------*/
.containerEye {
    --color: #717178;
    --size: 20px;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: var(--size);
    user-select: none;
    fill: var(--color);
}

.containerEye .eye {
    position: absolute;
    top: -33px;
    right: 10px;
    animation: keyframes-fill .5s;
}

.containerEye .eye-slash {
    position: absolute;
    top: -33px;
    right: 10px;
    animation: keyframes-fill .5s;
    display: none;
}

/* ------ On check event ------ */
.containerEye input:checked~.eye {
    display: none;
}

.containerEye input:checked~.eye-slash {
    display: block;
}

/* ------ Hide the default checkbox ------ */
.containerEye input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* ------ Animation ------ */
@keyframes keyframes-fill {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    50% {
        transform: scale(1.2);
    }
}</style>