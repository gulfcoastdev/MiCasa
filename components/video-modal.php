<!-- Video Tour Modal -->
<div id="video-tour-modal" class="video-modal" style="display: none;">
    <div class="video-modal-overlay" onclick="closeVideoTour()"></div>
    <div class="video-modal-content">
        <button class="video-modal-close" onclick="closeVideoTour()" aria-label="Close video">&times;</button>
        <h3 id="video-modal-title" class="video-modal-title"></h3>
        <div class="video-modal-wrapper">
            <iframe id="video-modal-iframe" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>
