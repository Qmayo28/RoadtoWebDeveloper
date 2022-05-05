

<?php $__env->startSection('content'); ?>
    <div class="m-auto w-4/5 py-24">
        <div class="text-center justify-items-end">
            <img src="<?php echo e(asset('image/' . $car->image_path)); ?>"  
            class="w-8/12 mb-8 justify-items-end shadow-xl" 
            alt="">

            <h1 class="text-5xl uppercase bold">
                <?php echo e($car->name); ?>

            </h1>
        </div>

        <div class="py-10 text-center">
                <div class="m-auto">
                    <span class="uppercase text-blue-500 font-bold text-xs italic">
                        Founded: <?php echo e($car->founded); ?>

                    </span>

                    <p class="text-lg text-gray-700 py-6">
                        <?php echo e($car->description); ?>

                    </p>

                    <table class="table-auto">
                        <tr class="bg-blue-100">
                            <th class="w-1/4 border-4 border-gray-500">
                                Model
                            </th>
                            <th class="w-1/4 border-4 border-gray-500">
                                Engines
                            </th>
                            <th class="w-1/4 border-4 border-gray-500">
                                Date
                            </th>
                        </tr>

                        <?php $__empty_1 = true; $__currentLoopData = $car->carModels; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $model): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            <tr>
                                <td class="border-4 border-gray-500">
                                    <?php echo e($model->model_name); ?>

                                </td>

                                <td class="border-4 border-gray-500">
                                    <?php $__currentLoopData = $car->engines; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $engine): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($model->id == $engine->model_id): ?>
                                            <?php echo e($engine->engine_name); ?>

                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </td>

                                <td class="border-4 border-gray-500">
                                    <?php echo e(date('d-m-Y', strtotime($car->productionDate->created_at))); ?>

                                </td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <p>
                                No car models found!
                            </p>
                        <?php endif; ?>
                    </table>
                    
                    <p class="text-left">
                        Product types:
                        <?php $__empty_1 = true; $__currentLoopData = $car->products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                            <?php echo e($product->name); ?>

                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                            <p>
                                No car product description
                            </p>
                        <?php endif; ?>
                    </p>
                    <hr class="mt-4 mb-8">
                </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\MICHAEL-PC\react\Laravel\cars\cars\resources\views/cars/show.blade.php ENDPATH**/ ?>